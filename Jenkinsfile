pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Etapa Build no disponible"
            }
        }
        stage('Tests') {
            steps {
                echo "Etapa Test no disponible"
            }
        }
        stage('Deploy') {
            steps {
                bat "docker compose down"
                bat "docker compose up"
            }
        }
    }
}
