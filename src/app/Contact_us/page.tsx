"use client";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function page() {
  return (
        <div className="min-h-screen flex flex-col bg-amber-50/20 text-gray-800" >
           <main className="flex-grow container mx-auto px-4 py-12 my-20">
                <div className=" max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-amber-100 p-8 md:p-12" >
                    
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-amber-900 mb-2">تواصل معنا</h1>
                        <p className="text-gray-600 text-sm">
                            نحن هنا دائماً للإجابة على استفساراتكم ومقترحاتكم لتحسين منصة كتابي.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* معلومات التواصل */}
                        <div className="flex flex-col justify-between space-y-6 bg-amber-50/50 p-6 rounded-2xl border border-amber-100/60">
                            <div>
                                <h3 className="font-bold text-lg text-amber-900 mb-4">معلومات الاتصال</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    يمكنك التواصل معنا عبر النموذج المخصص أو من خلال وسائل الاتصال المباشرة أدناه.
                                </p>
                            </div>
                            
                            <div className="space-y-4 text-sm text-gray-700">
                                <div className="flex items-center gap-3">
                                    <span className="p-2.5 bg-amber-200/50 rounded-xl text-amber-900 flex items-center justify-center">
                                        <FaMapMarkerAlt className="w-4 h-4" />
                                    </span>
                                    <span>العنوان: حلب، سوريا</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="p-2.5 bg-amber-200/50 rounded-xl text-amber-900 flex items-center justify-center">
                                        <FaEnvelope className="w-4 h-4" />
                                    </span>
                                    <span>support@ketabi.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="p-2.5 bg-amber-200/50 rounded-xl text-amber-900 flex items-center justify-center">
                                        <FaPhoneAlt className="w-4 h-4" />
                                    </span>
                                    <span>+963 900 000 000</span>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">الاسم الكامل</label>
                                <input 
                                    type="text" 
                                    placeholder="أدخل اسمك هنا..." 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-700 text-sm bg-gray-50/50"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                                <input 
                                    type="email" 
                                    placeholder="name@example.com" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-700 text-sm bg-gray-50/50"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">الرسالة</label>
                                <textarea 
                                    rows={4} 
                                    placeholder="اكتب رسالتك هنا..." 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-700 text-sm bg-gray-50/50 resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full py-3 bg-[#8B4513] hover:bg-[#703810] text-white font-medium rounded-xl transition duration-300 shadow-md text-sm"
                            >
                                إرسال الرسالة
                            </button>
                        </form>
                    </div>

                </div>
            </main>
        </div>
    );
}


export default page


