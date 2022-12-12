"use client";

import { supabase } from "@/utils/supabaseClient";
import React, { useState } from "react";
import { z } from "zod";

const dataSchema = z.object({
  coachNumber: z.number(),
  coachType: z.string().min(2),
});

function AddCoach() {
  const [coachNumber, setCoachNumber] = useState("");
  const [coachType, setCoachType] = useState("");

  const onSubmitHandler = async () => {
    console.log(coachNumber, coachType);
    const validationResult = dataSchema.safeParse({
      coachNumber: parseInt(coachNumber),
      coachType,
    });

    if (validationResult.success) {
      console.log(validationResult.data);

      const { data, error } = await supabase
        .from("coach")
        .insert([{ coach_number: coachNumber, coach_type: coachType }]);

      console.log(data);
    } else {
      console.log(validationResult.error);
    }
  };

  return (
    <div className="container mx-auto mt-3 flex justify-center flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 px-5">
      <input
        type="text"
        placeholder="Coach Number"
        className="border rounded-md py-2"
        value={coachNumber}
        onChange={(e) => setCoachNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Coach Type"
        className="border rounded-md py-2"
        value={coachType}
        onChange={(e) => setCoachType(e.target.value)}
      />
      <button
        className="bg-sky-600 hover:bg-sky-700 rounded-md py-2 sm:py-1 text-white px-9"
        onClick={() => onSubmitHandler()}
      >
        Add
      </button>
    </div>
  );
}

export default AddCoach;
