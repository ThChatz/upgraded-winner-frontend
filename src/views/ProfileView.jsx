import Profile from "../components/Profile/Profile";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import Feed from "../components/Feed/Feed"

import DefaultLayout from "../layouts/DefaultLayout";


function ProfileView() {
    return (
	<DefaultLayout>
	    <DefaultLayout.LeftSideBar>
                        <LeftSideBar
                            profile_pic="my-account/profile-pic.jpg"
                            username="Hackerman"
                            bio="I am hack yr comput0r :^(("
                        />
	    </DefaultLayout.LeftSideBar>
	    <DefaultLayout.Content>
		<Profile ProfileName="hackerman"
			 ProfilePicUrl="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg"
			 ProfileLocation="Ur Mom">
		    
		    <Feed feedSrc="/feed"/>
		</Profile>
	    </DefaultLayout.Content>
	    
	</DefaultLayout>);
}

export default ProfileView;
