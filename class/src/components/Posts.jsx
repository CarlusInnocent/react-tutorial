import { PostItem } from "./Post-Item";

export function Posts(){
    return(
        <div>
            <PostItem image="./src/components/aci.jpeg" name="Carlus Innocent" age={24} verified={true}/>
            <PostItem image="./src/components/eve.jpeg" name="Eve" age={25} verified={false}/>
            <PostItem image="./src/components/addie.jpeg" name="Addie" age={23} verified={true}/>
        </div>
    );
}  