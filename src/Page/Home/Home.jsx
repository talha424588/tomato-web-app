import { useState } from 'react';
import Header from '../../Components/Header/Header';
import Menu from '../../Components/Menu/Menu';
import './Home.css'
function Home()
{
    const [category, setCategory] = useState("all");
    console.log("category",category);

    return (
        <>
        <Header></Header>
        <Menu category={category} setCategory={setCategory}/>
        </>
    )
}
export default Home;