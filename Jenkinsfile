pipeline {
    agent any
    
    stages {
        stage('Code-clone') {
            steps {
                script {
                    // Add private GitHub credentials here
                    withCredentials([usernamePassword(credentialsId: 'github-credentials', usernameVariable: 'GITHUB_USERNAME', passwordVariable: 'GITHUB_TOKEN')]) {
                        git url: 'https://github.com/aditya-k8s/kindlebit-main.git', branch: 'main', credentialsId: 'github-credentials'
                    }
                }
            }
        }
        
        stage('code-Build and Test') {
            steps {
                // Run Build and tests here
                sh 'docker build . -t aditya223221/kindlebit:v0.1'
                // Add your build and test commands here
            }
        }
        
        stage('Docker Login and Push Image on DockerHub') {
            steps {
                // Login and push code on DockerHub using CI/CD
                echo 'Pushing code to DockerHub'
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh '''
                        docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
                        docker push aditya223221/kindlebit:v0.1
                    '''
                }
            }
        }
        
        stage('Deploy on Server') {
            steps {
                // Perform cleanup steps here (e.g., deleting temporary files)
                sh 'docker-compose down && docker-compose up -d'
                // Add your cleanup commands here
            }
        }
    }
    
    post {
        always {
            // Cleanup steps to be executed regardless of the pipeline status
            echo 'Pipeline finished'
        }
        
        success {
            // Steps to be executed if the pipeline succeeds
            echo 'Pipeline succeeded'
        }
        
        failure {
            // Steps to be executed if the pipeline fails
            echo 'Pipeline failed'
        }
    }
}
