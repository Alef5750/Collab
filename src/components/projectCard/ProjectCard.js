import React from "react";
import {
	ProjectCardContainer,
	ProjectTitle,
	IconsContainer,
	IconWrapper,
	RolesContainer,
	Role
} from "./projectCard.styles";
import { projectInfo } from "../../data/mock-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClock } from "@fortawesome/free-regular-svg-icons";
import {
	faHeart as faHeartSolid,
	faGlobe,
	faPeopleGroup,
	faComputer,
	faLeaf,
	faXmark
} from "@fortawesome/free-solid-svg-icons";
//import { solid, regular, } from '@fortawesome/fontawesome-svg-core/import.macro'

const ProjectCard = () => {
	const {
		title,
		tagline,
		projectField,
		type,
		spokenLanguage,
		duration,
		sizeOfTeam,
		roles
	} = projectInfo;

	

	return (
		<ProjectCardContainer>
			<ProjectTitle>
				<div>{title}</div>
				<div><FontAwesomeIcon icon={faHeart} /></div>
				{/* <FontAwesomeIcon icon={faHeartSolid} />             */}
			</ProjectTitle>
			<div>Tagline: {tagline}</div>
			<IconsContainer>
				<IconWrapper>
					<div><FontAwesomeIcon icon={faLeaf} /></div>
					<div>{projectField}</div>
				</IconWrapper>
				<IconWrapper>
					<div><FontAwesomeIcon icon={faComputer} /></div>
					<div>{type}</div>
				</IconWrapper>
				<IconWrapper>
					<div><FontAwesomeIcon icon={faGlobe} /></div>
					<div>{spokenLanguage}</div>
				</IconWrapper>				

				<IconWrapper>
					<div><FontAwesomeIcon icon={faClock} /></div>
					<div>{duration}</div>
				</IconWrapper>
				<IconWrapper>
					<div><FontAwesomeIcon icon={faPeopleGroup} /></div>
					<div>{sizeOfTeam}</div>
				</IconWrapper>
			</IconsContainer>
			<RolesContainer>
				{roles.map ((role, index) => {
					return (
						<Role key={index}>							
							<div>{role}</div>
							<div><FontAwesomeIcon icon={faXmark} /></div>
						</Role>
					)
				})}
			</RolesContainer>
		</ProjectCardContainer>
	);
};

export default ProjectCard;
