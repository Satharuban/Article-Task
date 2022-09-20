import React, {useState, useEffect} from 'react'
import {Button, Container, Grid} from '@mui/material'
import './article_list.css';
import axios from 'axios';
import {Link} from "react-router-dom";
// const numbers =
//     [{
//         title: 'title',
//         date: "2/2/2022"
//     },
//     {
//         title: 'title',
//         date: "2/2/2022"
//     }]

function HandleOnClick() {
        // window.location.href("/article")
      }

function Article_List() {
    
    const [articles, setArticles] = useState([])

    const baseURL = 'http://localhost:5000/'
    
    const getArticles = async () => {
        await axios
            .get('http://localhost:5000/')
            .then((response) => {
                setArticles(response.data);
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    
        useEffect(() => {
            getArticles();
        }, []);

   
    return (
        <Container maxWidth="lg">
            <br />
            <br />
            <br />
            <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    className=''
                >
                    <Grid
                        sm={10}  xs={8}
                    ></Grid>
                    <Grid
                        sm={2}   xs={4}
                    ><Button style={{backgroundColor:"#267dbf", color:"#FFF", marginBottom:10}} className='button' href='/add_article'> Add Article</Button></Grid>


                </Grid>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
            >

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    className='header'
                >
                    <Grid
                        sm={4}  xs={6}
                    >Title</Grid>
                    <Grid
                        sm={4}  xs={3}
                    >Created At</Grid>
                    <Grid
                        sm={4}  xs={3}
                    >Modified At</Grid>


                </Grid>

                {/* {listItems} */}
                {articles.reverse().map(e => (
                    <Link to={{
                        pathname: `/article/${e.id}`,
                        state: {e}
                    }} key={e.id} style={{textDecoration:"none"}}>
                <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className='data'
        >
            <Grid
                sm={4} xs={6}
           >{e.title}</Grid>
            <Grid
                sm={4} xs={3}
            >{e.created_at} </Grid>
            <Grid
                sm={4} xs={3}
            >{e.updated_at} </Grid>


        </Grid>
        </Link>
))}



            </Grid>
        </Container>

    );

}



export default Article_List