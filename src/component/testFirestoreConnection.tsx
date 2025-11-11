"use client";

import { useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase"; // your firebase config file

export default function TestFirestoreConnection() {
  const [message, setMessage] = useState<string>("Click the button to test Firestore");

  const testFirestore = async () => {
    setMessage("Testing connection...");

    try {
      // Create a test document
      const testRef = doc(db, "testCollection", "testDoc");
      await setDoc(testRef, { timestamp: new Date().toISOString(), status: "connected" });

      // Retrieve it
      const snapshot = await getDoc(testRef);

      if (snapshot.exists()) {
        const data = snapshot.data();
        setMessage(`✅ Firestore connected! Data: ${JSON.stringify(data)}`);
      } else {
        setMessage("⚠️ Document not found — Firestore might not be initialized correctly.");
      }
    } catch (error) {
      setMessage(`❌ Firestore error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
      <h2 className="text-xl font-semibold">Firestore Connection Test</h2>
      <button
        onClick={testFirestore}
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
      >
        Test Firestore
      </button>
      <p className="text-sm text-gray-700 max-w-[500px] text-center mt-3">{message}</p>
    </div>
  );
}
