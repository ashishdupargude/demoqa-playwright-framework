pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
                bat 'npm run allure:generate'
            }
        }
    }

    post {
        always {

            allure([
            includeProperties: false,
            jdk: '',
            results: [[path: 'allure-results']]
        ])
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
        }
    }
}