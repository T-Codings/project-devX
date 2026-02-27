import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Eye, EyeOff } from 'lucide-react';

function SignIn() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPass, setShowPass] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Handle successful login, e.g., send data to server
      console.log('Login successful', formData);
      // Simulate login with dummy data
      login({ email: formData.email }, 'dummy-token');
      navigate('/');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl">
        <div className="flex justify-center">
          <div className="rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow-xl p-4 sm:p-6 max-w-xl w-[500px] mx-auto min-h-0 h-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Sign In</h2>
              <p className="mt-2 text-base sm:text-lg text-gray-600">
              Sign in to continue learning
              </p>
            </div>
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-base sm:text-lg font-semibold text-gray-700">Email</label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full rounded-xl border bg-white/70 px-4 py-2 text-base sm:text-lg text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-purple-400 focus:ring-1 focus:ring-purple-200 ${errors.email ? 'border-red-300 focus:border-red-400 focus:ring-red-200/60' : 'border-gray-200'}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label className="text-base sm:text-lg font-semibold text-gray-700">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPass ? "text" : "password"}
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={`w-full rounded-xl border bg-white/70 px-4 py-2 pr-12 text-base sm:text-lg text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-purple-400 focus:ring-1 focus:ring-purple-200 ${errors.password ? 'border-red-300 focus:border-red-400 focus:ring-red-200/60' : 'border-gray-200'}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-600"
                  >
                    {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-purple-900 text-white px-4 py-3 rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-200/60 transition"
              >
                Sign In
              </button>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link to="/forgot-password" className="font-medium text-purple-600 hover:text-purple-500">
                    Forgot your password?
                  </Link>
                </div>
              </div>

                  <p className="mt-2 text-sm text-gray-600 text-center">
                                  Don't have an account yet, {' '}
                                  <Link to="/signup" className=" text-purple-700 hover:text-purple-600">
                                    Sign Up
                                  </Link>
                                </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;