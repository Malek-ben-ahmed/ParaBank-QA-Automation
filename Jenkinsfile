pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                checkout scm
            }
        }
        stage('install dependencies'){
            steps{
                bat 'npm ci'
            }
        }
        stage('install playright browsers'){
            steps{
                bat 'set "PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT=120000" && npx playwright install chromium'
            }
        }
        stage('run tests'){
            steps{
                bat 'npx playwright test'
            }
        }
        stage('Publish Test Reports') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**',
                                 allowEmptyArchive: true
            }
        }
    }
}