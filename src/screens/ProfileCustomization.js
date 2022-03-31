
export default function ProfileCustomization() {
    return (
        <div className="profile-customization-screen-wrapper mt-12 mb-6 w-fit mx-auto">
            <h1 className="leading-snug text-xl text-slate-800 font-semibold text-center">
                Create your profile and add preferences
            </h1>
            <p className="leading-snug text-sm text-slate-500 text-center">
                Having same interests helps to match profiles
            </p>

            <div className="profile-customization-body-content-wrapper mt-8">
                <div class="profile-input-wrapper mt-8">
                    <h3 class="text-slate-700 leading-snug font-semibold ml-2">A Short Bio</h3>
                    <textarea class="w-full max-w-md p-2 bg-white border border-slate-300 rounded-md h-36 mt-3 focus:outline-pink-400 placeholder:text-sm placeholder:text-gray-400" placeholder="Stalking people, product designining, Leetcoding..."></textarea>
                </div>
                <div class="profile-input-wrapper mt-8">
                    <h3 class="text-slate-700 leading-snug font-semibold ml-2">What do you like to eat the most?</h3>
                    <textarea class="w-full max-w-md p-2 bg-white border border-slate-300 rounded-md h-36 mt-3 focus:outline-pink-400 placeholder:text-sm placeholder:text-gray-400" placeholder="Pizza and Red Wine, Butter Chicken..."></textarea>
                </div>
                <div class="profile-input-wrapper mt-8">
                    <h3 class="text-slate-700 leading-snug font-semibold ml-2">What do you see in a partner?</h3>
                    <textarea class="w-full max-w-md p-2 bg-white border border-slate-300 rounded-md h-36 mt-3 focus:outline-pink-400 placeholder:text-sm placeholder:text-gray-400" placeholder="Should know Javascript and has a macbook, should have a github profile..."></textarea>
                </div>
                <div class="profile-input-wrapper mt-8">
                    <h3 class="text-slate-700 leading-snug font-semibold ml-2">Why you're here, and not applying for a job??</h3>
                    <textarea class="w-full max-w-md p-2 bg-white border border-slate-300 rounded-md h-36 mt-3 focus:outline-pink-400 placeholder:text-sm placeholder:text-gray-400" placeholder="I already have a job/internship and wanting to go on a date..."></textarea>
                </div>
            </div>
            <button className="mt-4 w-full h-auto rounded-md py-2 bg-pink-600 hover:bg-pink-700 leading-snug font-semibold text-white" id="next-step-btn">Next Step</button>
        </div>
    )
}