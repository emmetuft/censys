/* eslint-disable */

import { useState, useEffect } from 'react';
import { csv } from 'd3';
import ClipLoader from 'react-spinners/ClipLoader';
import './App.css';

import Input from './components/Input';
import Button from './components/Button';

function App() {

    const [addressData, setAddressData] = useState();
    const [ipAddress, setIPAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        csv('addressData.csv').then(data => {
            setAddressData(data);
        });
    }, [])

    const handleChangeInput = (e) => {
        setIPAddress(e.target.value);
        notFound ? setNotFound(false) : '';
    }

    const handleClickSubmit = () => {
        let found = false;
        addressData.forEach(row => {
            if (row.network === ipAddress) {
                found = true;
                setLatitude(row.latitude);
                setLongitude(row.longitude);
            };
        })
        
        if (!found) {
            setNotFound(true);
            setLatitude('');
            setLongitude('');
        };
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleClickSubmit()
        }
    }

    return (
        <div className="app">
            {!addressData ?
                <div className="main-container">
                    <p>Loading data...</p>
                    <ClipLoader color="white" size={20} />
                </div> :
                <div className="main-container">
                    <div className="input-container">
                        <Input onChange={handleChangeInput} onKeyDown={handleKeyDown} />
                        <Button text="SUBMIT" handleClick={handleClickSubmit} />
                    </div>
                    <div className="details">
                        {latitude !== '' ?
                            <p>Latitude: {latitude}</p> : ''
                        }
                        {longitude !== '' ?
                            <p>Longitude: {longitude}</p> : ''
                        }
                        {notFound ?
                            <p>IP Address Not Found</p> : ''
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default App;
