
export default function AuthenticationScreen() {
    return (
        <div className="authentication-screen-wrapper flex flex-row items-center justify-center">
            <div className="auth-content-wrapper mt-24 p-12">
                <h1 className="text-2xl leading-snug font-semibold text-slate-800 text-center">
                Hope you'll find your partner today!
                </h1>
                <div className="auth-buttons-wrapper flex flex-col gap-4 items-start mt-6">
                    <button className="auth_twitter_button w-full h-auto rounded-md py-2 bg-pink-600 leading-snug font-semibold text-white">Continue with Twitter</button>
                    <button className="auth_twitter_button w-full h-auto rounded-md py-2 bg-white leading-snug font-semibold text-pink-600 border border-pink-600">Continue with GitHub</button>
                </div>
            </div>
        </div>
    )
}