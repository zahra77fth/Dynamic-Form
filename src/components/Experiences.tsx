import React from "react";
import React, { useState } from 'react';
import {SubmitHandler, useForm} from 'react-hook-form'

interface experience {
    nameOfCompany: String,
    startDate: Date,
    endDate: Date,
    roll: String,
    description: String
}

const Experiences = () => {
    const [experienceCounter, setExperienceCounter] = useState(0)
    const { register, handleSubmit } = useForm<formData>()
  return (
      <div>
          <div>
              <label htmlFor="name">Name of Company:</label>
              <input
                  {...register("name")}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded p-2"
              />
          </div>
          <div>
              <label htmlFor="completionDate">Date of Completion:</label>
              <input
                  type="date"
                  id="completionDate"
                  name="completionDate"
                  className="w-full border border-gray-300 rounded p-2"
              />
          </div>
          <div>
              <label htmlFor="completionDate">Date of Completion:</label>
              <input
                  type="date"
                  id="completionDate"
                  name="completionDate"
                  className="w-full border border-gray-300 rounded p-2"
              />
          </div>

          <button type="button" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Experience
          </button>
      </div>
  )
}
export default Experiences