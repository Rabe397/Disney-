import React, { useEffect } from 'react';
import {SiteHeader,Container,Nav,logo,homeIcon,searchIcon,whatchlistIcon,originalsIcon,
NavLast,movieIcon,seriesIcon} from './style.js';
import {Link , useNavigate} from 'react-router-dom';
import { setSignOut, setUser, userInfo } from '../../redux/disneySlice.js';
import {useSelector , useDispatch} from 'react-redux';
import {auth , googleProvider} from '../../firebase.js';
import { signInWithPopup } from 'firebase/auth';

const Header = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let user = useSelector(userInfo);
 
    // useEffect(()=>{
    //     // refresh-problem
    //     auth.onAuthStateChanged(async(user)=>{
    //         if(user){
    //             dispatch(setUser(res.user));
    //             navigate("/");
    //         }
    //     })
    // })

    const signIn = ()=>{
        signInWithPopup(auth,googleProvider)
        .then((res)=>{
            console.log(res);
            dispatch(setUser(res.user));
            console.log(setUser);
            navigate("/");
        })
    }

    const signOut = ()=>{
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut());
            navigate("/");
        })
    }

    return(
        <SiteHeader className='main-padd'>
            <Container className='flex'>
                <figure className='site-logo'>
                    <img src={logo} alt="logo" />
                </figure>
                {user ?
                <>
                  <Nav className='flex'>
                    <a href="" className='flex'>
                        <img src={homeIcon} alt="home-icon" />
                        <span> Home </span>
                    </a>
                    <a href="" className='flex'>
                        <img src={searchIcon} alt="search-icon" />
                        <span> Search </span>
                    </a>
                    <a href="" className='flex'>
                        <img src={whatchlistIcon} alt="whatchlist-icon" />
                        <span> Whatchlist </span>
                    </a>
                    <a href="" className='flex'>
                        <img src={originalsIcon} alt="originals-icon" />
                        <span> Originals </span>
                    </a>
                    <a href="" className='flex'>
                        <img src={movieIcon} alt="movie-icon" />
                        <span> Movies </span>
                    </a>
                    <a href="" className='flex'>
                        <img src={seriesIcon} alt="series-icon" />
                        <span> Series </span>
                    </a>
                  </Nav>
                  <NavLast>
                   <img src={user.photoUrl} alt="user" />
                   <button className='logout-btn' onClick={signOut()}> Sign Out </button>
                  </NavLast>
                </> 
                   
                :    
                 <button className='login-btn' onClick={()=> signIn()}> Login </button>       
                }
            </Container>    
        </SiteHeader>
    )
}

export default Header;