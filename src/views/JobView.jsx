import React from 'react';
import TwoColLayout from "../layouts/TwoColLayout"
import LeftSideBar from "../components/LeftSideBar/LeftSideBar"

import JobList from "../components/JobList"

function JobView() {

	return (
		<TwoColLayout>
			<TwoColLayout.LeftSideBar>
				<LeftSideBar
					profilePic="my-account/profile-pic.jpg"
					profileName="Hackerman"
					bio="I am hack yr comput0r :^(("
				/>
			</TwoColLayout.LeftSideBar>
			<TwoColLayout.Content>
				<JobList src="/jobs" />
			</TwoColLayout.Content>

		</TwoColLayout>);
}

export default JobView;
