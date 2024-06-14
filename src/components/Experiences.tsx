import React from 'react';
import { Control, FieldErrors, useWatch } from 'react-hook-form';
import TextInput from './TextInput';
import DateInput from './DateInput';

interface ExperienceProps {
    control: Control<any>;
    errors: FieldErrors<any>;
    experienceCounter: number;
}

const Experiences: React.FC<ExperienceProps> = ({ control, errors, experienceCounter }) => {
    const experiences = useWatch({ control, name: 'experiences' });

    return (
        <>
            {Array.from({ length: experienceCounter }).map((_, i) => {
                const startDate = experiences?.[i]?.startDate;
                const endDate = experiences?.[i]?.endDate;

                return (
                    <div key={i} className="mb-6">
                        <h2 className="text-xl font-bold mb-4">Experience {i + 1}</h2>
                        <TextInput
                            label="Name of Company"
                            name={`experiences.${i}.nameOfCompany`}
                            control={control}
                            rules={{ required: 'Company Name is required' }}
                        />
                        <TextInput
                            label="Roll"
                            name={`experiences.${i}.roll`}
                            control={control}
                            rules={{ required: 'Roll is required' }}
                        />
                        <DateInput
                            label="Start Date"
                            name={`experiences.${i}.startDate`}
                            control={control}
                            rules={{ required: 'Start Date is required' }}
                        />
                        <DateInput
                            label="End Date"
                            name={`experiences.${i}.endDate`}
                            control={control}
                            rules={{
                                required: 'End Date is required',
                                validate: (value: string) =>
                                    !startDate || new Date(value) > new Date(startDate) || 'End date must be after start date'
                            }}
                        />
                        <TextInput
                            label="Description"
                            name={`experiences.${i}.description`}
                            control={control}
                            rules={{ required: 'Description is required' }}
                            textarea
                        />
                    </div>
                );
            })}
        </>
    );
};

export default Experiences;
