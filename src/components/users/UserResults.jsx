import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
    const { users, loading } = useContext(GithubContext);

    if (loading) {
        return <Spinner />;
    }
    return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users && users.map((user) => <UserItem key={user.id} user={user} />)}
        </div>
    );
}

export default UserResults;
