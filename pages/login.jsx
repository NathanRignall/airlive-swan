import Header from "components/parts/header";

import { Button, Card, Input } from "components/basic";

export default function Home(props) {
    return (
        <>
            <Header title="AirLive Login" />

            <div className="h-full">
                <div className="flex items-center justify-center pt-12 h-[80vh]">
                    <Card className="max-w-md" padding={Card.padding.SCREEN}>
                        <img src="/media/logo/wide-logo.svg " className="h-20 sm:h-32 m-auto" />

                        <form className="space-y-3">
                            <div>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <Input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        placeholder="Email address"
                                        placement={Input.placement.TOP}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        placeholder="Password"
                                        placement={Input.placement.BOTTOM}
                                    />
                                </div>
                            </div>
                            <Button display={Button.display.BLOCK}>Login</Button>
                        </form>

                        <div className="text-sm font-medium text-logo3 hover:text-logo-light">
                            Forgoten your password?
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
