pipeline {
    agent any
    stages {
        stage('SCM') {
            steps{
                git 'https://github.com/mandeeppasbola/react-redux-saga-firebase-sample-app.git'
            }
        }
        stage('SonarQube analysis') {
            steps{
                withSonarQubeEnv('SonarQube') {
                    bat "sonar-scanner -Dsonar.projectKey=mandeep -Dsonar.sources=."
                }     
                script{
                    def qualitygate = waitForQualityGate()
                    if (qualitygate.status != "OK") {
                    error "Pipeline aborted due to quality gate coverage failure: ${qualitygate.status}"
                    }
                }
            }
        }
        stage('build') {
            steps {
                bat 'npm install'
                bat 'npm run build:prod'
            }
        }        
    }
}
