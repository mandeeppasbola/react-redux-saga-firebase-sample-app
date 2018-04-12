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
                withSonarQubeEnv('My SonarQube Server') {
                    bat 'mvn clean package sonar:sonar'
                }
            }
        }
        stage("Quality Gate"){
            steps{
                timeout(time: 1, unit: 'HOURS') { // Just in case something goes wrong, pipeline will be killed after a timeout
                    steps{
                        def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
                        if (qg.status != 'OK') {
                            error "Pipeline aborted due to quality gate failure: ${qg.status}"
                        }
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
