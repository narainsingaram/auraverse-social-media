import {Avatar} from 'antd'

const CreatePostForm = () => {
    return (
        <Container className="card">
            <Container className="card-body pb-1">
                <form className="card-body pb-1">
                    <textarea className="form-control" placeholder="Write something..."></textarea>
                    
                </form>
            </Container>
            <Container className="card-footer">
            <button className="btn btn-primary mt-1">Post</button>
            </Container>
        </Container>
    );
};

export default CreatePostForm;