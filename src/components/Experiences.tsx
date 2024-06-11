import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import TextInput from './TextInput';
import DateInput from './DateInput';

interface ExperienceProps {
    register: UseFormRegister<any>;
    errors: FieldErrors<any>;
    experienceCounter: number;
}

const Experiences: React.FC<ExperienceProps> = ({ register, errors, experienceCounter }) => {
    return (
        <>
            {Array.from({ length: experienceCounter }).map((_, i) => (
                <div key={i} className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Experience {i + 1}</h2>
                    <TextInput
                        label="Name of Company"
                        id={`experiences.${i}.nameOfCompany`}
                        register={register}
                        errors={errors}
                        validation={{ required: 'Company Name is required' }}
                    />
                    <TextInput
                        label="Roll"
                        id={`experiences.${i}.roll`}
                        register={register}
                        errors={errors}
                        validation={{ required: 'Roll is required' }}
                    />
                    <DateInput
                        label="Start Date"
                        id={`experiences.${i}.startDate`}
                        register={register}
                        errors={errors}
                        validation={{ required: 'Start Date is required' }}
                    />
                    <DateInput
                        label="End Date"
                        id={`experiences.${i}.endDate`}
                        register={register}
                        errors={errors}
                        validation={{ required: 'End Date is required' }}
                    />
                    <TextInput
                        label="Description"
                        id={`experiences.${i}.description`}
                        register={register}
                        errors={errors}
                        validation={{ required: 'Description is required' }}
                    />
                </div>
            ))}
        </>
    );
};

export default Experiences;
