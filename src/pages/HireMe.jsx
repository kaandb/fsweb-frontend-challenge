import { useForm } from 'react-hook-form'; 
import { toast } from 'react-toastify'; 
import { useNavigate } from 'react-router-dom'; 
import useAxios from '../hooks/useAxios'; 

export default function HireMe() {
  const navigate = useNavigate();
  
  const { req } = useAxios();

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = async (formData) => {
    await toast.promise(
      req({
        url: 'https://httpbin.org/post', 
        method: 'POST',
        data: formData
      }),
      {
        pending: 'Sending message...',
        success: {
          render() {
            setTimeout(() => {
              navigate('/'); 
            }, 2000);
            return 'Message sent successfully! 🎉';
          }
        },
        error: 'Something went wrong. Please try again.'
      },
      {
        position: "top-right",
        autoClose: 3000,
      }
    );
  };

  const inputClass = "w-full p-3 rounded-md bg-gray-50 dark:bg-[#333] border border-gray-300 dark:border-none text-gray-900 dark:text-white focus:ring-2 focus:ring-[#4731D3] outline-none transition-all";

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-10 px-4 transition-colors duration-300">
      
      <div className="w-full max-w-lg bg-white dark:bg-[#2B2730] p-8 rounded-xl shadow-2xl border border-gray-100 dark:border-none">
        
        <h2 className="text-3xl font-bold text-[#4731D3] dark:text-[#B7AAFF] mb-6 text-center">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input 
              {...register("name", { required: true })} 
              className={inputClass}
              placeholder="Name" 
            />
            {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              E-mail
            </label>
            <input 
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
              className={inputClass}
              placeholder="example@gmail.com" 
            />
            {errors.email && <span className="text-red-500 text-xs mt-1">Please enter a valid email</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Message
            </label>
            <textarea 
              rows="4"
              {...register("message", { required: true })} 
              className={inputClass}
              placeholder="Write your message here..."
            />
            {errors.message && <span className="text-red-500 text-xs mt-1">Message cannot be empty</span>}
          </div>

          <button 
            type="submit" 
            className="w-full py-3 px-6 rounded-md text-white font-bold text-lg transition-all bg-[#4731D3] hover:bg-[#3730A3] shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>

        </form>

        <div className="mt-6 text-center">
            <button onClick={() => navigate('/')} className="text-sm text-gray-500 hover:text-[#4731D3] underline">
                ← Back to Home
            </button>
        </div>

      </div>
    </div>
  );
};