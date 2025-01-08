import submit from '../assets/submit.png'
export default function DonorRegistrationForm() {
    return (
       <div className="min-h-screen mb-20 p-4">
           <div className="mx-auto">
             {/* Header */}
             <div className="mx-6 bg-gradient-to-r rounded-md from-[#500732] to-[#A8174E] p-6">
               <h1 className="text-2xl font-bold text-white">Register As Receiver</h1>
             </div>
     
             {/* Form */}
             <form className="space-y-6 rounded-lg bg-white p-8 shadow-2xl">
               {/* User Name and  Email  */}
               <div className="flex flex-col gap-4 sm:flex-row">
                 <div className='flex-1'>
                   <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-700">
                     User Name
                   </label>
                   <input
                     type="text"
                     id="username"
                     placeholder="User Name"
                     className="w-full rounded-md border border-gray-300 p-2 focus:border-[#8B1538] focus:outline-none focus:ring-1 focus:ring-[#8B1538]"
                   />
                 </div>
                 <div className='flex-1'>
                   <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                     E mail
                   </label>
                   <input
                     type="email"
                     id="email"
                     placeholder="Mail Id"
                     className="w-full rounded-md border border-gray-300 p-2 focus:border-[#8B1538] focus:outline-none focus:ring-1 focus:ring-[#8B1538]"
                   />
                 </div>
               </div>
     
               {/* Password and Phone Number */}
               <div className="flex flex-col gap-4 sm:flex-row">
                 <div className='flex-1'>
                   <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                     Password
                   </label>
                   <input
                     type="password"
                     id="password"
                     placeholder="Password"
                     className="w-full rounded-md border border-gray-300 p-2 focus:border-[#8B1538] focus:outline-none focus:ring-1 focus:ring-[#8B1538]"
                   />
                 </div>
                 <div className='flex-1'>
                   <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                     Phone Number
                   </label>
                   <input
                     type="tel"
                     id="phone"
                     placeholder="Number"
                     className="w-full rounded-md border border-gray-300 p-2 focus:border-[#8B1538] focus:outline-none focus:ring-1 focus:ring-[#8B1538]"
                   />
                 </div>
               </div>
     
               {/* Address and Age */}
               <div className="flex flex-col gap-4 sm:flex-row">
                 <div className="flex-1">
                   <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">
                     Address
                   </label>
                   <textarea
                     id="address"
                     placeholder="Type Here"
                     rows={3}
                     className="w-full rounded-md border border-gray-300 p-2 focus:border-[#8B1538] focus:outline-none focus:ring-1 focus:ring-[#8B1538]"
                   />
                 </div>
                 <div className="flex-1">
                   <label htmlFor="age" className="mb-2 block text-sm font-medium text-gray-700">
                     Age
                   </label>
                   <input
                     type="number"
                     id="age"
                     placeholder="Age"
                     className="w-full rounded-md border border-gray-300 p-2 focus:border-[#8B1538] focus:outline-none focus:ring-1 focus:ring-[#8B1538]"
                   />
                 </div>
               </div>
     
               {/* Blood Group and Medical Conditions */}
               <div className="flex flex-col gap-4 sm:flex-row">
                 <div className="flex-1">
                   <label htmlFor="bloodGroup" className="mb-2 block text-sm font-medium text-gray-700">
                     Blood Group
                   </label>
                   <select
                     id="bloodGroup"
                     className="w-full rounded-md border border-gray-300 p-2 focus:border-[#8B1538] focus:outline-none focus:ring-1 focus:ring-[#8B1538]"
                   >
                     <option value="">Select Blood Group</option>
                     <option value="A+">A+</option>
                     <option value="A-">A-</option>
                     <option value="B+">B+</option>
                     <option value="B-">B-</option>
                     <option value="O+">O+</option>
                     <option value="O-">O-</option>
                     <option value="AB+">AB+</option>
                     <option value="AB-">AB-</option>
                   </select>
                 </div>
                 <div className="flex-1">
                   <label htmlFor="medical" className="mb-2 block text-sm font-medium text-gray-700">
                     Medical Conditions
                   </label>
                   <input
                     type="text"
                     id="medical"
                     placeholder="Medical Conditions"
                     className="w-full rounded-md border border-gray-300 p-2 focus:border-[#8B1538] focus:outline-none focus:ring-1 focus:ring-[#8B1538]"
                   />
                 </div>
               </div>
     
               {/* Last Donation */}
               <div className="flex flex-col gap-4 sm:flex-row">
                 <div className="flex-1">
                   <label htmlFor="month" className="mb-2 block text-sm font-medium text-gray-700">
                     Last Donation
                   </label>
                   <input
                     type="text"
                     id="month"
                     placeholder="Month"
                     className="w-full rounded-md border border-gray-300 p-2 focus:border-[#8B1538] focus:outline-none focus:ring-1 focus:ring-[#8B1538]"
                   />
                 </div>
                 <div className="flex-1">
                   <label htmlFor="year" className="mb-2 block text-sm font-medium text-transparent">
                     .
                   </label>
                   <input
                     type="text"
                     id="year"
                     placeholder="Year"
                     className="w-full rounded-md border border-gray-300 p-2 focus:border-[#8B1538] focus:outline-none focus:ring-1 focus:ring-[#8B1538]"
                   />
                 </div>
               </div>
     
               {/* Terms Checkbox */}
               <div className="flex justify-center items-start gap-2">
                 <input
                   type="checkbox"
                   id="terms"
                   className="mt-1 h-4 w-4 rounded border-gray-300"
                 />
                 <label htmlFor="terms" className="text-sm  text-gray-600">
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 </label>
               </div>
     
               {/* Submit Button */}
               <div className="flex justify-end">
                 <button
                   type="submit"
                   className="inline-flex items-center gap-6 rounded-md bg-black text-white shadow-md px-8 py-2"
                 >
                   <span>Submit</span>
                   <img className='h-6 w-6' src={submit} alt="submit" />
                 </button>
               </div>
             </form>
           </div>
         </div>
    )
  }
  
  