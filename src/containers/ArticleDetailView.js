import React, {Component} from 'react';


import axios from 'axios'
import { Card } from 'antd'



class ArticleDetail extends React.Component{

    state = {
        article: {}
        
    };
    
    componentDidMount() {
        const articleId= this.props.match.params.articleId
        axios.get(`http://127.0.0.1:8000/api/${articleId}`)
        .then(res=>{
            this.setState({
                article: res.data
            });
            console.log(5)
        })
    }
    
    render(){
       return(
    
          <Card title={this.state.article.title}>
              <p>{this.state.article.content}</p>
          </Card>
        )
    }
}

export default ArticleDetail;