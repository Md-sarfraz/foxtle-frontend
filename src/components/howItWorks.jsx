import { Play, Check } from "lucide-react"
import teamMeeting from "../assets/images/teamMeeting.png";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 pt-40">
            <div className="relative flex flex-col lg:flex-row">

                {/* Left Section - Pink Background */}
                <div className="lg:w-3/5 bg-[#FE4C1C26] flex items-center justify-center relative p-6 lg:p-0">
                    {/* Video Frame */}
                    <div 
                        className="
                            relative overflow-hidden shadow-lg 
                            w-full max-w-xs sm:max-w-sm md:max-w-md 
                            lg:absolute lg:right-0 lg:translate-x-20 
                        "
                    >
                        <img 
                            src={teamMeeting} 
                            alt="Team meeting" 
                            className="w-full h-auto rounded-lg" 
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="lg:bg-blue-500 bg-[#FE4C1C] rounded-full p-4 shadow-lg hover:bg-blue-600 transition-colors cursor-pointer">
                                <Play className="w-8 h-8 text-white fill-white ml-1 " />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Content */}
                <div className="lg:w-3/5 bg-white p-8 lg:pl-40 lg:pr-16 lg:py-16 flex flex-col justify-center">
                    <div className="max-w-sm">
                        <h1 className="text-3xl font-bold text-gray-900 mb-3">How it work</h1>

                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            Specify helps you unify your brand identity by collecting, storing and distributing
                            design tokens and assets — automatically.
                        </p>

                        {/* Feature Cards */}
                        <div className="space-y-3">
                            <div className="bg-pink-100 rounded-lg p-4 flex items-center gap-2">
                                <Check className="w-4 h-4 text-pink-600" />
                                <span className="text-gray-800 text-sm">Specify helps you unify your brand.</span>
                            </div>

                            <div className="bg-orange-100 rounded-lg p-4 flex items-center gap-2">
                                <Check className="w-4 h-4 text-orange-600" />
                                <span className="text-gray-800 text-sm">Specify helps you unify your brand.</span>
                            </div>

                            <div className="bg-gray-200 rounded-lg p-4 flex items-center gap-2">
                                <Check className="w-4 h-4 text-gray-700" />
                                <span className="text-gray-800 text-sm">Specify helps you unify your brand.</span>
                            </div>

                            <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-2">
                                <Check className="w-4 h-4 text-gray-500" />
                                <span className="text-gray-800 text-sm">Specify helps you unify your brand.</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
