import React, { useEffect, useState } from "react";

import { db, auth } from "./firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

export default function Birds() {
  const [name, setName] = useState("");

  const [type, setType] = useState("");

  const [age, setAge] = useState("");

  const [image, setImage] = useState("");

  const [search, setSearch] = useState("");

  const [filterType, setFilterType] = useState("");

  const [birds, setBirds] = useState<any[]>([]);

  useEffect(() => {
    const loadBirds = async () => {
      const querySnapshot = await getDocs(collection(db, "birds"));

      const birdsData = querySnapshot.docs

        .map((docData) => {
          return {
            firebaseId: docData.id,

            ...docData.data(),
          };
        })

        .filter((bird: any) => bird.userId === auth.currentUser?.uid);

      setBirds(birdsData);
    };

    loadBirds();
  }, []);

  const handleImage = (e: any) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const addBird = async () => {
    if (!name) return;

    let imageUrl = "";

    if (image) {
      const imageRef = ref(storage, `birds/${Date.now()}`);

      const response = await fetch(image);

      const blob = await response.blob();

      await uploadBytes(imageRef, blob);

      imageUrl = await getDownloadURL(imageRef);
    }

    const newBird = {
      name,

      type,

      age,

      image: imageUrl,

      userId: auth.currentUser?.uid,

      createdAt: Date.now(),
    };

    const docRef = await addDoc(collection(db, "birds"), newBird);

    setBirds([
      ...birds,

      {
        firebaseId: docRef.id,

        ...newBird,
      },
    ]);

    setName("");

    setType("");

    setAge("");

    setImage("");
  };

  const deleteBird = async (firebaseId: string) => {
    const updated = birds.filter((bird) => bird.firebaseId !== firebaseId);

    setBirds(updated);

    await deleteDoc(doc(db, "birds", firebaseId));
  };

  const filteredBirds = birds.filter((bird) => {
    const matchesSearch = bird.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesType = filterType === "" || bird.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div
      style={{
        minHeight: "100vh",

        padding: 20,

        background: "linear-gradient(to bottom,#020617,#111827)",

        color: "white",
      }}
    >
      <h1>🐦 إدارة الطيور</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 بحث عن طائر"
        style={inputStyle}
      />

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        style={inputStyle}
      >
        <option value="">كل الأنواع</option>

        <option value="كوكتيل">كوكتيل</option>

        <option value="بادجي">بادجي</option>

        <option value="روز">روز</option>
      </select>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="اسم الطائر"
        style={inputStyle}
      />

      <input
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="نوع الطائر"
        style={inputStyle}
      />

      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="العمر"
        style={inputStyle}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
        style={{
          marginTop: 10,

          marginBottom: 10,

          color: "white",
        }}
      />

      <button onClick={addBird} style={buttonStyle}>
        ➕ إضافة
      </button>

      <div
        style={{
          marginTop: 20,
        }}
      >
        {filteredBirds.map((bird, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",

              padding: 16,

              borderRadius: 18,

              marginBottom: 15,
            }}
          >
            {bird.image && (
              <img
                src={bird.image}
                alt="bird"
                style={{
                  width: "100%",

                  borderRadius: 14,

                  marginBottom: 10,
                }}
              />
            )}

            <h2>🐤 {bird.name}</h2>

            <p>🧬 {bird.type}</p>

            <p>🎂 {bird.age}</p>

            <button
              onClick={() => deleteBird(bird.firebaseId)}
              style={{
                marginTop: 10,

                border: "none",

                padding: "10px 14px",

                borderRadius: 10,

                background: "#dc2626",

                color: "white",
              }}
            >
              حذف
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",

  padding: 14,

  marginTop: 10,

  borderRadius: 12,

  border: "none",

  background: "#1e293b",

  color: "white",
};

const buttonStyle = {
  width: "100%",

  padding: 14,

  marginTop: 10,

  border: "none",

  borderRadius: 12,

  background: "#22c55e",

  color: "white",

  fontWeight: "bold" as const,
};
