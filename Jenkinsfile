node {

    stage('Install Dependencies') {
        steps {
            echo 'Installing npm dependencies...'
            bat 'npm install'
            bat 'npm i react-router-dom'
        }
    }

    stage('Build') {
        steps {
            echo 'Building React app...'
            bat 'npm run build'
        }
    }

    stage('Deploy') {
        steps {
            echo 'Deploying React app...'
            bat 'npm start'
            // Example deployment: copy build folder somewhere or run deployment script
            // Customize this as per your deployment process
                
            // For example, if deploying to a web server directory:
            // bat 'xcopy /E /I build\\* C:\\inetpub\\wwwroot\\yourapp\\'
                
            // Or run a deploy script if you have one
            // bat 'deploy-script.bat'
        }
    }

    stage('Conclusion') {
        def response = input message: 'What do you think?', parameters: [choice(choices: 'Yes\nNo', description: 'Proceed or Abort?',  name: 'Pass or Fail?')]

        if(response=='Yes'){
            echo "I agree!"
        } else {
            echo "Failure!"
        }
    }

}

