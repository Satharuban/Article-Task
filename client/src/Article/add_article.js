import React, {useState, useEffect} from 'react'
import { Button, Container, Grid, Input } from '@mui/material'
import './article_list.css';
import axios from 'axios';
import {Redirect} from "react-router-dom";




function Add_Article() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [addArticleStatus, setAddArticleStatus] = useState(false)

    const addArticle = async () => {
        if (title && content) {
            const data = new FormData();
            data.append('title', title);
            data.append('content', content);
            console.log(title);
            console.log(content);

            await axios
                .post('http://localhost:5000', {title, content})
                .then((response) => {
                    console.log("Successfullt created");
                    setAddArticleStatus(true);

                })
                .catch((err) => {
                    console.log(err.message);
                });
        }

    };
    if (addArticleStatus) {
        return <Redirect to={'/'}/>;
    }

    return (
        <Container maxWidth="lg">
            <br />
            <br />
            <br />
            <form>
            <div className='container'>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className='container'
            >
                <Grid
                    sm={10} xs={8}
                ></Grid>
                <Grid
                    sm={2} xs={4}
                >
                    {/* <button className='button'> Add Article</button> */}
                </Grid>


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
                        sm={8} xs={9}
                    > <input type="text" id="title" name="title" placeholder='Title' value={title}
                        onChange={(e) => setTitle(e.target.value )} 
                    /></Grid>
                    <Grid
                        sm={4} xs={3}
                    ></Grid>


                </Grid>

                <Grid

                ><textarea  id="content" name="content" placeholder='Content'rows="5" cols="100" value={content}
                onChange={(e) => setContent(e.target.value )}
                /></Grid>



                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    className=''
                >
                    <Grid
                        sm={10} xs={8}
                    ></Grid>
                    <Grid
                        container
                        justifyContent="flex-end"
                        alignItems="center"
                        sm={2} xs={4}
                        
                    ><Button style={{backgroundColor:"blue", color:"#FFF"}} className='button' onClick={addArticle}> Save</Button></Grid>


                </Grid>

            </Grid>
            </div>
            </form>
        </Container>

    );

}



export default Add_Article