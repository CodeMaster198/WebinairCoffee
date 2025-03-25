<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire
    $type_client = $_POST['name'] ?? '';
    $nom_prenom = $_POST['email'] ?? '';
    $raison_social1 = $_POST['message'] ?? '';


    
    $fileContent = ''; // Initialisation

    // Créez une nouvelle instance de PHPMailer
    $mail = new PHPMailer(true);
    try {
        // Configuration du serveur SMTP DreamsCards
        $mail->isSMTP();
        $mail->Host = 'mail.dreamscards.tn'; // Serveur SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'rochdi@dreamscards.tn'; // Email DreamsCards
        $mail->Password = 'Masinissa123'; // Mot de passe du compte
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Utilisation de SSL/TLS
        $mail->Port = 465; // Port SMTP sécurisé

        // Expéditeur et destinataire
        $mail->setFrom('rochdi@dreamscards.tn', 'DreamsCards');
        $mail->addAddress('rochdi@dreamscards.tn', 'Rochdi');

        // Contenu de l'email
        $mail->isHTML(true);
        $mail->Subject = "Nouveau message depuis le formulaire de contact";
        $mail->Body = "
        <h2>Nouveau message reçu :</h2>
        <p><strong>Type de client :</strong> $type_client</p>
        <p><strong>Nom et Prénom :</strong> $nom_prenom</p>
        <p><strong>Sujet :</strong> $raison_social1</p>

 
        ";

        // Envoyer l'email
        $mail->send();
         // Rediriger après l'envoi
         header('Location: ../portfolio.html?showAlert=1');
         exit;
         
        // Rediriger après l'envoi
     
        
    } catch (Exception $e) {
        echo "Erreur lors de l'envoi : {$mail->ErrorInfo}";
    }
} else {
    echo "Méthode non autorisée.";
}
?>
