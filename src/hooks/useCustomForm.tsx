import { ChangeEvent, useState } from "react"

type InputsChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

export const useCustomForm = (INIT_STATE: object) => {
    
    const [formBody, setFormBody] = useState(INIT_STATE);

    const handleChange = (event: InputsChangeEvent) => {
        const { name, value } = event.target;
        setFormBody({ 
            ...formBody, 
            [name as keyof typeof INIT_STATE]: value
         });
    };

    const resetForm = () => {
        setFormBody(INIT_STATE);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formBody);
        resetForm();
    }
  
    return {
        formBody,
        
        handleChange,
        handleSubmit,
        resetForm,
    }
}
