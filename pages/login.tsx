import Header from "components/parts/header";

import { useForm } from "react-hook-form";

import { Button, Card, Input } from "components/basic";

type LoginFormType = {
    email: string;
    password: string;
};

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: LoginFormType) => {
        console.log("data", data);
    };

    return (
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="email-address2" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address2"
                        type="email"
                        autoComplete="email"
                        placeholder="Email address"
                        className="appearance-none rounded-none text-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-logo2 focus:border-logo2 focus:z-10"
                        {...register("email", { required: true })}
                    />
                </div>

                <div>
                    <label htmlFor="password2" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password2"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        className="appearance-none rounded-none text-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-logo2 focus:border-logo2 focus:z-10"
                        {...register("password", { required: true })}
                    />
                </div>
            </div>

            {errors.email && errors.email.type === "required" && (
                <div className="error">Your must enter your email.</div>
            )}

            <Button display={Button.display.BLOCK} element={Button.element.SUBMIT}>
                Login
            </Button>
        </form>
    );
}

export default function Home(props) {
    return (
        <>
            <Header title="AirLive Login" />

            <div className="h-full">
                <div className="flex items-center justify-center pt-12 h-[80vh]">
                    <Card className="max-w-md" padding={Card.padding.SCREEN}>
                        <img src="/media/logo/wide-logo.svg " className="h-20 sm:h-32 m-auto" />

                        <LoginForm />

                        <div className="text-sm font-medium text-logo3 hover:text-logo-light">
                            Forgoten your password?
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
