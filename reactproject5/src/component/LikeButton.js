import React from "react";

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false}
        this.toggleLike = this.toggleLike.bind(this);
        
    }

    toggleLike(){
        this.setState({liked: !this.state.liked});
    }
    /*render(){
        if (this.state.liked){
            return 'You liked this.';
        }
        return React.createElement(
            'button',
            { onClick: () => this.setState({liked: true}) },
            'Like'
        );
    }*/
    render() {
        return(
            <div>
                <h1>Welcome !!!</h1>
                {
                    this.state.liked ? (
                        <div>
                            <p><h4>TRUE</h4></p>
                            <button onClick={this.toggleLike}> LIKED </button>
                        </div>
                    ) : (
                        <div>
                            <p><h4>FALSE</h4></p>
                            <button onClick={this.toggleLike}> NOT LIKED</button>
                        </div>    
                    )
                    }
            </div>
        )
    }
}

export default LikeButton;