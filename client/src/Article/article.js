import React,{useState,useEffect} from 'react'
import { Button, Container, Grid, Input } from '@mui/material'
import './article_list.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const numbers =
    [{
        title: 'title',
        date: "2/2/2022"
    },
    {
        title: 'title',
        date: "2/2/2022"
    }]



function Article(props) {
    //console.log("Hello");
    const [ads,setAds] = useState([])
    const [status, setStatus] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const articleSpec = props.location.state;
    console.log(articleSpec.e);
    function handleDelete (id) {
        console.log(id)
           setIsLoading(true);
       axios
           .delete(`http://localhost:5000/${id}`)
           .then(setStatus(true))
           .catch(async (error) => {
               setIsLoading(false);
               
               console.log('Api call error')
           })
           window.location.href="/"
        
   }
   
       useEffect(() => {
           <Redirect to="/" />
   
           return () => {
   
           };
       }, [handleDelete]);
       if(status){
        <Redirect to={'/'} />
       }
    return (
        <Container maxWidth="lg">
            <br />
            <br />
            <br />
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
                        {/* <Button onClick={  () => {
                                    handleDelete(articleSpec.e.id)
                                }
                                } style={{marginTop:-90,backgroundColor:"red", color:"#FFF"}} > Delete</Button> */}
                    </Grid>


                </Grid>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="stretch"
                >
                            <Button onClick={  () => {
                                    handleDelete(articleSpec.e.id)
                                }
                                } style={{width:'100px',backgroundColor:"red", color:"#FFF"}} > Delete</Button>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        className='header'
                    >
                        <Grid
                            sm={8} xs={9}
                        > Titlle : {articleSpec ? articleSpec.e.title : null}</Grid>
                        <Grid
                            sm={4} xs={3}
                            container
                            justifyContent="flex-end"
                            alignItems="center"
                        >Date</Grid>


                    </Grid>

                    <Grid

                    >
                        <div className='content'> {articleSpec? articleSpec.e.content:null} </div>
                        </Grid>



                    {/* <Grid
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
                        
                    ><button className='button'> Save</button></Grid>


                </Grid> */}

                </Grid>
            </div>
        </Container>

    );

}



export default Article