// PDF generation functionality
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadPdf');
    
    downloadBtn.addEventListener('click', function() {
        generatePDF();
    });
});

function generatePDF() {
    // Create a new window for PDF content
    const printWindow = window.open('', '_blank');
    
    // Get the current page content
    const htmlContent = document.documentElement.outerHTML;
    
    // Create PDF-optimized HTML
    const pdfContent = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>おめがシスターズ - 企業向けプロポーザル</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', Meiryo, メイリオ, sans-serif;
                line-height: 1.6;
                color: #333;
                background: white;
                margin: 20px;
            }
            
            .pdf-header {
                text-align: center;
                margin-bottom: 40px;
                padding: 20px;
                border-bottom: 3px solid #667eea;
            }
            
            .pdf-header h1 {
                font-size: 2.5rem;
                color: #667eea;
                margin-bottom: 10px;
            }
            
            .pdf-header p {
                font-size: 1.2rem;
                color: #666;
            }
            
            h2 {
                font-size: 1.8rem;
                color: #2d3748;
                margin: 30px 0 15px 0;
                padding-bottom: 10px;
                border-bottom: 2px solid #e2e8f0;
            }
            
            h3 {
                font-size: 1.3rem;
                color: #4a5568;
                margin: 20px 0 10px 0;
            }
            
            p {
                margin-bottom: 10px;
                line-height: 1.7;
            }
            
            .highlight {
                background: #f7fafc;
                padding: 15px;
                border-left: 4px solid #667eea;
                margin: 15px 0;
            }
            
            .stats-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin: 20px 0;
            }
            
            .stat-item {
                text-align: center;
                padding: 15px;
                background: #f8fafc;
                border-radius: 8px;
            }
            
            .stat-number {
                font-size: 2rem;
                font-weight: bold;
                color: #667eea;
                display: block;
            }
            
            .stat-label {
                font-size: 0.9rem;
                color: #666;
            }
            
            .service-section {
                margin: 25px 0;
                padding: 15px;
                background: #f8fafc;
                border-radius: 8px;
            }
            
            .video-examples {
                margin: 10px 0 0 20px;
            }
            
            .video-link {
                margin: 5px 0;
                font-size: 0.85rem;
            }
            
            .strengths-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
                margin: 20px 0;
            }
            
            .strength-item {
                padding: 15px;
                background: #f0f4f8;
                border-radius: 8px;
                border-left: 4px solid #667eea;
            }
            
            ul {
                margin-left: 20px;
                margin-bottom: 15px;
            }
            
            li {
                margin-bottom: 8px;
            }
            
            .pdf-footer {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 2px solid #e2e8f0;
                text-align: center;
                color: #666;
            }
            
            @media print {
                body { margin: 0; }
                .pdf-header { page-break-after: avoid; }
                h2 { page-break-after: avoid; }
                .service-section { page-break-inside: avoid; }
                .strength-item { page-break-inside: avoid; }
            }
        </style>
    </head>
    <body>
        <div class="pdf-header">
            <h1>おめがシスターズ</h1>
            <p>クライアント様向け活動実績・企画のご提案</p>
        </div>
        
        <h2>VTuber「おめがシスターズ」について</h2>
        <p>おめがシスターズは、双子の姉「おめがレイ」と妹「おめがリオ」からなる二人組のVTuberユニットです。2018年の活動開始以来、YouTubeチャンネル登録者数は40万人を超え、多くの方々から支持されています。</p>
        
        <p>最大の特徴は、VR/3DCG技術を駆使した先進的な企画力と、実写とバーチャルを巧みに融合させたユニークな動画スタイルです。</p>
        
        <div class="highlight">
            <p><strong>VTuberでありながら、着ぐるみを着用したり、実写の体にアバターの顔を合成する「顔だけVTuber」といった手法を用いることで、実際に商品を手に取って紹介することが可能です。</strong>これにより、バーチャルならではの面白さと、実写のリアルな訴求力を両立したプロモーションを実現します。</p>
        </div>
        
        <h2>おめがシスターズにご依頼可能な企画カテゴリ</h2>
        <p>貴社の商品やサービスのプロモーションに合わせて、以下のような企画をご提案可能です。</p>
        
        <div class="service-section">
            <h3>VTuberなのに実写で商品を紹介できます</h3>
            <div class="video-examples">
                <div class="video-link">• 【潜入】VTuberのスクールって何してんの？</div>
                <div class="video-link">• おめシス、会社に直談判しにいくことにしました。</div>
            </div>
        </div>
        
        <div class="service-section">
            <h3>テクノロジー・ガジェット紹介</h3>
            <p>VR/AR技術や最新ガジェット、ソフトウェアなどを、専門的な知見を交えつつ、視聴者に分かりやすく解説・レビューします。新製品の魅力を効果的に伝え、購買意欲に繋げます。</p>
            <div class="video-examples">
                <div class="video-link">• 【新発売】このカメラ、絶対知っておいた方がいい / Insta360 GO 3</div>
                <div class="video-link">• スタバに60万のVisionProつけてる変な人がいました。</div>
                <div class="video-link">• 【比較】新しいiPad Proの技術がすごすぎた</div>
            </div>
        </div>
        
        <div class="service-section">
            <h3>エンターテイメント企画</h3>
            <p>ドッキリや検証、視聴者参加型など、高い企画力と実行力で、視聴者を飽きさせないエンターテイメント性の高いコンテンツを制作します。商品やサービスを自然な形で動画に組み込むことも可能です。</p>
            <div class="video-examples">
                <div class="video-link">• 【ドッキリ】もしも水が「透明な醤油」だったらどうする？</div>
                <div class="video-link">• 【ドッキリ検証】おめがリオはヤラセをするのか？</div>
            </div>
        </div>
        
        <div class="service-section">
            <h3>ゲーム実況</h3>
            <p>VRゲームから話題のeスポーツタイトル、ボードゲームまで、幅広いジャンルのゲームを姉妹ならではの楽しい掛け合いで実況します。ゲームの魅力を最大限に引き出し、コミュニティを盛り上げます。</p>
            <div class="video-examples">
                <div class="video-link">• バイオ4VR、やります。</div>
                <div class="video-link">• Vチューバーさん、メダロットになってしまう！？</div>
            </div>
        </div>
        
        <div class="service-section">
            <h3>音楽・歌唱</h3>
            <p>高い歌唱力を活かした「歌ってみた」動画は、数々の楽曲がミリオン再生を記録しています。オリジナル楽曲の制作・プロモーションや、イベントでのライブパフォーマンスなどもご相談いただけます。</p>
            <div class="video-examples">
                <div class="video-link">• 白日 / King Gnu by おめがシスターズ (214万回再生)</div>
                <div class="video-link">• 【GBF】ニブンノイチ / BACK-ON by おめがシスターズ (116万回再生)</div>
                <div class="video-link">• モンスターカミング / おめがシスターズ(official)</div>
            </div>
        </div>
        
        <div class="service-section">
            <h3>企業・サービス紹介（タイアップ実績多数）</h3>
            <p>食品、飲料、ガジェット、寝具など、様々な企業とのタイアップ実績がございます。単なる商品紹介に留まらず、ドッキリ企画などを交えることで、視聴者に楽しみながら自然な形で商品・サービスの魅力を訴求します。</p>
            <div class="video-examples">
                <div class="video-link">• おめがリオは案件だったらどんな飲み物がでてきても、おいしいと言ってしまうのか？</div>
                <div class="video-link">• 【怒らせたい】寝具の案件、説明長すぎて全然寝れないドッキリ</div>
            </div>
        </div>
        
        <h2>主な実績と影響力</h2>
        <div class="stats-grid">
            <div class="stat-item">
                <span class="stat-number">40.5万人</span>
                <div class="stat-label">YouTubeチャンネル登録者数</div>
            </div>
            <div class="stat-item">
                <span class="stat-number">2億2,300万回</span>
                <div class="stat-label">YouTube総再生回数</div>
            </div>
        </div>
        
        <h3>公式アンバサダー等</h3>
        <ul>
            <li>2019年 YouTubeコントリビューターに採用</li>
            <li>東京ゲームショウ2021 VRアンバサダー</li>
        </ul>
        
        <h2>おめがシスターズの強み</h2>
        <div class="strengths-grid">
            <div class="strength-item">
                <h3>高い技術力と企画力</h3>
                <p>VR/3DCGを駆使した先進性と、視聴者を惹きつける企画力を両立。</p>
            </div>
            <div class="strength-item">
                <h3>豊富な実績と信頼性</h3>
                <p>長年の活動で培った信頼と、数々の企業タイアップや公式アンバサダーという豊富な実績。</p>
            </div>
            <div class="strength-item">
                <h3>幅広い表現力</h3>
                <p>テクニカルな解説から、体を張ったバラエティ、感動を呼ぶ歌まで対応可能。</p>
            </div>
            <div class="strength-item">
                <h3>唯一無二のキャラクター</h3>
                <p>双子ならではの息の合ったトークと、個性的なキャラクターが織りなす魅力的な世界観。</p>
            </div>
        </div>
        
        <h2>お問い合わせ</h2>
        <p>貴社のニーズに合わせた最適な企画をご提案させていただきますので、ぜひお気軽にご相談ください。</p>
        
        <div class="pdf-footer">
            <p>&copy; 2024 おめがシスターズ. All rights reserved.</p>
        </div>
    </body>
    </html>`;
    
    // Write content to the new window
    printWindow.document.write(pdfContent);
    printWindow.document.close();
    
    // Wait for content to load, then print
    printWindow.onload = function() {
        setTimeout(function() {
            printWindow.print();
        }, 500);
    };
}

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card, .strength-item, .stat-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});