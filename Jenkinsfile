pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                bat 'checkout scm'
            }
        }
        stage('install dependencies'){
            steps{
                bat 'npm ci'
            }
        }
        stage('install playright browsers'){
            steps{
                bat 'npx playwright install chromium'
            }
        }
        stage('run tests'){
            steps{
                bat 'npx playwright test'
            }
        }
        tage('Publish Test Reports') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**',
                                 allowEmptyArchive: true
            }
        }
    }
}