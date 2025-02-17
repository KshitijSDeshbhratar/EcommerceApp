import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useRef, useState } from 'react';
import {TextInput, Pressable} from 'react-native';
import style from './style';
import { scaleFontSize } from '../../assets/styles/scaling';
import PropTypes from 'prop-types';


const Search = props => {
    const textInputRef = useRef(null);
    const [search,setSearch] = useState('');

    const handleSearch = (searchValue) => {
        setSearch(searchValue);
        props.onSearch(searchValue);
    };

    const handleFocus = () => {
        textInputRef.current.focus();
    };
    return(
        <Pressable style = {style.searchInputContainer} onPress={handleFocus}>
            <FontAwesomeIcon icon={faSearch} color="#25C0FF" size={scaleFontSize(22)}/>
            <TextInput 
            ref= {textInputRef} 
            style={style.searchInput} 
            value={search}
            onChangeText={(value) => handleSearch(value)}
            placeholder="Search"/>
        </Pressable>
    );
};

Search.defaultProps = {
    onSearch: () => {},
};

Search.propTypes = {
onSearch: PropTypes.func ,
};

export default Search;
