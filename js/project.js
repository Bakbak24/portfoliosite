        document.addEventListener("DOMContentLoaded", function () {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const project = urlParams.get('project');

            fetch('projects.json')
                .then(response => response.json())
                .then(data => {
                    const projectData = data.projects[project];
                    if (projectData) {
                        document.getElementById('project-title').innerText = projectData.title;
                        document.getElementById('project-intro-text').innerText = projectData.intro;

                        const designProcessContainer = document.getElementById('project-design-process');
                        projectData.phases.forEach(phase => {
                            const phaseElement = document.createElement('div');
                            phaseElement.classList.add('design-phase');

                            const phaseTitle = document.createElement('h3');
                            phaseTitle.innerText = phase.title;
                            phaseElement.appendChild(phaseTitle);

                            if (phase.description) {
                                const phaseDescription = document.createElement('p');
                                phaseDescription.innerText = phase.description;
                                phaseElement.appendChild(phaseDescription);
                            }

                            if (phase.image) {
                                const phaseImage = document.createElement('img');
                                phaseImage.src = phase.image;
                                phaseImage.alt = phase.title;
                                phaseElement.appendChild(phaseImage);
                            }

                            designProcessContainer.appendChild(phaseElement);
                        });
                    }
                })
                .catch(error => console.error('Error loading project data:', error));
        });