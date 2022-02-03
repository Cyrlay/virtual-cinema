import React, {useState} from 'react';
import './Header.css'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import {Link} from 'react-router-dom';
import {
    Nav,
    NavLink,
    NavMenu,
    Bars
} from './Nav/NavbarElements';
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../redux/cinema/cinemaSlice";

const Header = () => {
    const [showLinks, setShowLinks] = useState(false)
    const [term, setTerm] = useState('')
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
        setTerm('')
    }
    return (
        <div className={'header'}>
            <div className="navigation">
                <div className={'back-buttons'}>
                    <Link to="/">
                        <LiveTvIcon className={'logo'} style={{height: 50, width: 50}}/>
                    </Link>
                    <Link className={'header-text'} to="/">Virtual Cinema</Link>
                </div>
                <Nav>
                    <NavMenu id={showLinks ? 'mobile-nav' : ''}>
                        <NavLink to='/movies'>
                            Movies
                        </NavLink>
                        <NavLink to='/series'>
                            Series
                        </NavLink>

                        <div className="search-box">
                            <form onSubmit={submitHandler}>
                                <input
                                    className={'input-text'}
                                    type="text"
                                    value={term}
                                    placeholder={`Search...`}
                                    onChange={
                                        (e) => {
                                            setTerm(e.target.value)
                                        }
                                    }/>
                                <button type={"submit"} className={'search-button'}><SearchIcon/></button>
                            </form>
                        </div>
                    </NavMenu>
                    <Bars onClick={() => setShowLinks(!showLinks)}/>
                </Nav>

            </div>

        </div>
    );
};

export default Header;