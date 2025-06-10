pipeline {
    agent any

    stages {
        stage('Limpiar contenedores Docker') {
            steps {
                script {
                    sh '''
                        echo "Eliminando contenedores Docker existentes..."
                        docker ps -aq | xargs -r docker rm -f
                    '''
                }
            }
        }
        stage('Clonar repositorio') {
            steps {
                git branch: 'main',
                url: 'https://github.com/pr0317/mi-proyecto-docker.git',
                credentialsId: 'personal'
            }
        }

        stage('Construir imágenes Docker') {
            steps {
                sh 'docker build -t mi-backend ./backend'
                sh 'docker build -t mi-frontend ./frontend'
            }
        }

        stage('Levantar contenedores') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}