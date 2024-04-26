import { useState } from 'react';
import Header from '../../Components/Header/Header';
import Menu from '../../Components/Menu/Menu';
import './Home.css'
function Home()
{
    const [categroy, setCategory] = useState("all");
    console.log("category",categroy);

    return (
        <>
        <Header></Header>
        <Menu categroy={categroy} setCategory={setCategory}/>
        </>
    )
}
export default Home;