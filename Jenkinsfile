pipeline {
    agent {
        docker {
            image 'node:24.14.1-alpine3.23'
        }
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'CI=true npm test'
            }
        }
    }
}