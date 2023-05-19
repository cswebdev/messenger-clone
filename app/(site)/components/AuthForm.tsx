'use client'
import { useCallback, useState } from "react"
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "../../components/inputs/inputs";



const AuthForm = () => {4
    type Variant = 'LOGIN' | 'REGISTER';
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if(variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    }, [variant])

    const {
        register, 
        handleSubmit,
        formState: { 
            errors 
        },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)
     
            if(variant === 'REGISTER') {
                // Register
            } 
            if(variant === 'LOGIN') {
                // Login
            }

    
    }

    const socialAction  = (action: string) => {
        setIsLoading(true)  

        // NextAuth Social Login
    }

return (
    <div
    className="
    mt-8
    sm:mx-auto
    sm:w-full
    sm:max-w-md
    "
    >
        <div
        className="
        bg-white
        px-4
        py-8
        shadow
        sm:rounded-lg
        sm:px-10
        "
        >
            <form
            className="
            space-y-6"
            onSubmit={handleSubmit(onSubmit)}

            >
                <Input />
            </form>

        </div>
    </div>
)
}

export default AuthForm