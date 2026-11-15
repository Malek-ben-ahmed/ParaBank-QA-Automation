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
                bat 'set PLAYWRIGHT_BROWSERS_PATH=C:\\Users\\DELL\\AppData\\Local\\ms-playwright'
                bat 'npx playwright install chromium'
            }
        }
        stage('run tests'){
            steps{
                bat 'npx playwright test'
            }
        }
        post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**',
                            allowEmptyArchive: true
        }
       }
    }
}