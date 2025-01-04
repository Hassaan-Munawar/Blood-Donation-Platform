import submit from '../assets/submit.png'
export default function DonorRegistrationForm() {
    return (
      <div className="min-h-screen mb-20 p-4">
        <div className="mx-auto">
          {/* Header */}
          <div className="mx-6 bg-gradient-to-r from-[#500732] to-[#A8174E] p-6">
            <h1 className="text-2xl font-bold text-white">Register As Donor</h1>
          </div>
  
          {/* Form */}
          <form className="space-y-6 rounded-lg bg-white p-8 shadow-2xl">
            {/* Full Name */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-transparent">
                  .
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
            </div>
  
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Number"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
  
            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                E mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Mail Id"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
  
            {/* Address and Age */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-[2]">
                <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  id="address"
                  placeholder="Type Here"
                  rows={3}
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
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
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
            </div>
  
            {/* Blood Group and State */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <label htmlFor="bloodGroup" className="mb-2 block text-sm font-medium text-gray-700">
                  Blood Group
                </label>
                <select
                  id="bloodGroup"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
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
                <label htmlFor="state" className="mb-2 block text-sm font-medium text-gray-700">
                  State
                </label>
                <select
                  id="state"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                >
                  <option value="">Select State</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                </select>
              </div>
            </div>
  
            {/* District and PinCode */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <label htmlFor="district" className="mb-2 block text-sm font-medium text-gray-700">
                  District
                </label>
                <select
                  id="district"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                >
                  <option value="">Select District</option>
                  <option value="district1">District 1</option>
                  <option value="district2">District 2</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="pincode" className="mb-2 block text-sm font-medium text-gray-700">
                  PinCode
                </label>
                <input
                  type="text"
                  id="pincode"
                  placeholder="PinCode"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
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
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
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
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
            </div>
  
            {/* Terms Checkbox */}
            <div className="flex justify-center items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
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
  
  