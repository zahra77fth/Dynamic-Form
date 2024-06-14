import React from 'react';
import { Control, useController } from 'react-hook-form';

interface TextInputProps {
    label: string;
    name: string;
    control: Control<any>;
    rules?: object;
    type?: string;
    textarea?: boolean;
    placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, name, control, rules, type = 'text', textarea = false, placeholder }) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
    });

    return (
        <div className="relative mb-6">
            <label htmlFor={name} className="absolute -top-2 left-3 bg-white px-1 text-purple-600 text-sm">
                {label}
            </label>
            {textarea ? (
                <textarea
                    id={name}
                    value={value || ''}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    rows={3}
                    placeholder={placeholder}
                    className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-gray-800 
                        ${error ? 'border-red-500' : 'border-purple-600 focus:border-purple-700'}`}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    value={value || ''}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    placeholder={placeholder}
                    className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-gray-800 
                        ${error ? 'border-red-500' : 'border-purple-600 focus:border-purple-700'}`}
                />
            )}
            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
        </div>
    );
};

export default TextInput;
