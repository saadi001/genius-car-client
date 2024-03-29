import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Signup = () => {
     const {createUser} = useContext(AuthContext); 
     const handleForm = (event) =>{
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;

          createUser(email, password)
          .then(result =>{
               const user = result.user;
               form.reset()
               console.log(user)
          })
          .catch(err => console.error(err))

     }
     return (
          <div className="hero my-5">
               <div className="hero-content grid gap-4 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                         <img className='w-4/5' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                         <h1 className="text-5xl font-bold text-center">Sign up!</h1>
                         <form onSubmit={handleForm} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Name</span>
                                   </label>
                                   <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                   <label className="label">
                                        <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>
                              </div>
                              <div className="form-control mt-6">
                                   <input className='btn btn-primary' type="submit" value="Login" />

                              </div>
                         <p className='text-center'>Already have an account? <Link className='text-orange-600 font-semibold' to='/login'>Login</Link></p>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Signup;