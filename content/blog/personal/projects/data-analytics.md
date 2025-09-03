---
title: "Machine Learning & Data Analytics Project"
date: 2023-12-05
description: "Comprehensive data analytics project using Python, machine learning algorithms, and statistical analysis for predictive modeling."
featured_image: "images/ml.jpg"
summary: "Machine learning and statistical analysis projects."
tags: ["machine learning", "python", "data science", "predictive modeling", "statistics"]
categories: ["academic", "data science"]
prev_button:
  url: "/projects/tableau/"
  text: "Previous: Tableau Visualization"
next_button:
  url: "/projects/data-supported-decisions/"
  text: "Next: Data-Supported Decisions"
---

# Machine Learning & Data Analytics Project

## Project Overview

This comprehensive data analytics project involved applying machine learning algorithms and statistical analysis techniques to solve real-world business problems. Completed as part of my Bachelor's degree coursework, the project demonstrated proficiency in Python programming, data science methodologies, and predictive modeling techniques.

## Project Objectives

### Primary Goals
- **Predictive Modeling**: Develop accurate models to forecast business outcomes
- **Pattern Recognition**: Identify hidden patterns and relationships in complex datasets
- **Statistical Analysis**: Apply advanced statistical methods for data interpretation
- **Model Validation**: Implement robust testing and validation frameworks

### Business Problem
**Customer Churn Prediction**: Develop a machine learning model to predict customer churn for a telecommunications company, enabling proactive retention strategies and reducing revenue loss.

## Dataset and Methodology

### Data Characteristics
- **Dataset Size**: 7,043 customer records with 21 features
- **Target Variable**: Binary classification (Churn: Yes/No)
- **Feature Types**: Demographic, service usage, billing, and account information
- **Time Period**: 12 months of customer interaction data

### Data Sources
- **Customer Demographics**: Age, gender, location, tenure
- **Service Usage**: Internet, phone, TV services, usage patterns
- **Billing Information**: Monthly charges, payment methods, contract types
- **Support Interactions**: Customer service calls, technical issues

## Technical Implementation

### Data Preprocessing Pipeline

#### 1. Data Cleaning
```python
# Data quality assessment and cleaning
- Missing value imputation (3.2% of records affected)
- Outlier detection and treatment using IQR method
- Data type conversion and standardization
- Duplicate record removal (47 duplicates found)
```

#### 2. Exploratory Data Analysis
- **Univariate Analysis**: Distribution analysis of all variables
- **Bivariate Analysis**: Correlation analysis and feature relationships
- **Multivariate Analysis**: Principal component analysis (PCA)
- **Statistical Testing**: Chi-square tests for categorical variables

#### 3. Feature Engineering
- **Categorical Encoding**: One-hot encoding for nominal variables
- **Feature Scaling**: StandardScaler for numerical features
- **Feature Selection**: Recursive feature elimination (RFE)
- **New Feature Creation**: Derived metrics like customer lifetime value

### Machine Learning Models

#### 1. Logistic Regression (Baseline Model)
- **Purpose**: Establish baseline performance and interpretability
- **Results**: 79.2% accuracy, good feature interpretability
- **Insights**: Contract type and tenure were strongest predictors

#### 2. Random Forest Classifier
- **Purpose**: Capture non-linear relationships and feature interactions
- **Hyperparameter Tuning**: GridSearchCV with 5-fold cross-validation
- **Results**: 84.7% accuracy, 0.89 AUC score
- **Feature Importance**: Monthly charges, contract type, tenure top features

#### 3. Gradient Boosting (XGBoost)
- **Purpose**: Achieve highest predictive performance
- **Optimization**: Bayesian optimization for hyperparameter tuning
- **Results**: 86.3% accuracy, 0.91 AUC score
- **Performance**: Best overall model with balanced precision/recall

#### 4. Support Vector Machine (SVM)
- **Purpose**: Explore kernel methods for complex decision boundaries
- **Kernel Selection**: RBF kernel with gamma optimization
- **Results**: 82.1% accuracy, computationally intensive

### Model Evaluation Framework

#### Performance Metrics
- **Accuracy**: Overall prediction correctness
- **Precision**: True positive rate for churn predictions
- **Recall**: Sensitivity to actual churn cases
- **F1-Score**: Harmonic mean of precision and recall
- **AUC-ROC**: Area under the receiver operating characteristic curve

#### Validation Strategy
- **Train-Test Split**: 80/20 stratified split
- **Cross-Validation**: 5-fold cross-validation for model selection
- **Holdout Validation**: Final model tested on unseen data
- **Temporal Validation**: Time-based split to simulate real-world deployment

## Key Findings and Insights

### Churn Prediction Results

#### Model Performance Summary
| Model | Accuracy | Precision | Recall | F1-Score | AUC |
|-------|----------|-----------|--------|----------|-----|
| Logistic Regression | 79.2% | 0.74 | 0.69 | 0.71 | 0.85 |
| Random Forest | 84.7% | 0.81 | 0.78 | 0.79 | 0.89 |
| XGBoost | 86.3% | 0.84 | 0.82 | 0.83 | 0.91 |
| SVM | 82.1% | 0.77 | 0.75 | 0.76 | 0.87 |

#### Feature Importance Analysis
1. **Monthly Charges** (23.4%): Higher charges strongly correlated with churn
2. **Contract Type** (18.7%): Month-to-month contracts showed highest churn
3. **Tenure** (15.2%): Customers with <12 months tenure at high risk
4. **Total Charges** (12.8%): Cumulative spending patterns indicator
5. **Internet Service Type** (11.3%): Fiber optic users showed higher churn

### Business Insights

#### Customer Segmentation
- **High-Risk Segment**: New customers (< 6 months) with month-to-month contracts
- **Medium-Risk Segment**: Long-term customers with recent service changes
- **Low-Risk Segment**: Multi-year contract holders with bundled services

#### Churn Patterns
- **Seasonal Trends**: 23% higher churn rates in Q1 (post-holiday period)
- **Service Issues**: Customers with >3 support calls 2.3x more likely to churn
- **Payment Methods**: Electronic check users showed 35% higher churn rates

## Statistical Analysis

### Hypothesis Testing
- **Chi-Square Test**: Significant association between contract type and churn (p < 0.001)
- **T-Test**: Significant difference in monthly charges between churned and retained customers
- **ANOVA**: Significant differences in tenure across customer segments

### Correlation Analysis
- **Strong Correlations**: Monthly charges vs. total charges (r = 0.65)
- **Negative Correlations**: Tenure vs. churn probability (r = -0.35)
- **Weak Correlations**: Demographics showed minimal correlation with churn

## Advanced Analytics Techniques

### Ensemble Methods
- **Voting Classifier**: Combined predictions from multiple models
- **Stacking**: Meta-learning approach with second-level classifier
- **Bagging**: Bootstrap aggregating for variance reduction

### Deep Learning Exploration
- **Neural Network**: 3-layer MLP with dropout regularization
- **Performance**: 85.1% accuracy, comparable to XGBoost
- **Complexity**: Higher computational cost without significant improvement

### Time Series Analysis
- **Seasonal Decomposition**: Identified quarterly churn patterns
- **Trend Analysis**: Overall churn rate declining 2.1% annually
- **Forecasting**: ARIMA model for future churn rate predictions

## Technical Skills Demonstrated

### Programming and Tools
- **Python**: Pandas, NumPy, Scikit-learn, XGBoost, Matplotlib, Seaborn
- **Statistical Software**: R for advanced statistical testing
- **Jupyter Notebooks**: Interactive development and documentation
- **Version Control**: Git for code management and collaboration

### Data Science Methodology
- **CRISP-DM Framework**: Structured approach to data mining projects
- **Feature Engineering**: Creative feature creation and selection techniques
- **Model Selection**: Systematic comparison and validation of algorithms
- **Hyperparameter Optimization**: Grid search and Bayesian optimization

## Business Impact and Recommendations

### Actionable Insights
1. **Retention Campaigns**: Target high-risk customers identified by the model
2. **Contract Optimization**: Incentivize multi-year contracts to reduce churn
3. **Service Improvement**: Address pain points causing support calls
4. **Pricing Strategy**: Review pricing for high-churn customer segments

### Expected Business Value
- **Churn Reduction**: Potential 15-20% reduction in customer churn
- **Revenue Impact**: Estimated $2.3M annual revenue retention
- **Cost Savings**: 40% reduction in reactive retention costs
- **Customer Satisfaction**: Proactive issue resolution improving experience

## Academic Achievement

### Course Performance
- **Grade**: A+ (97/100)
- **Recognition**: Best project award in Data Analytics course
- **Publication**: Abstract accepted at student research conference

### Skills Validation
- **Certification Preparation**: Foundation for data science certifications
- **Portfolio Enhancement**: Featured project in academic portfolio
- **Industry Relevance**: Techniques applicable to current network analytics role

## Future Enhancements

### Model Improvements
- **Real-Time Scoring**: Deploy model for live churn prediction
- **Deep Learning**: Explore advanced neural network architectures
- **Automated Retraining**: Implement MLOps pipeline for model updates
- **Explainable AI**: Enhance model interpretability for business users

### Advanced Analytics
- **Customer Lifetime Value**: Integrate CLV modeling with churn prediction
- **Recommendation Systems**: Develop product recommendation algorithms
- **Network Analysis**: Social network effects on customer churn
- **Causal Inference**: Understand causal relationships in customer behavior

## Technologies and Libraries Used

### Core Technologies
- **Python 3.8**: Primary programming language
- **Pandas 1.3.0**: Data manipulation and analysis
- **Scikit-learn 0.24.2**: Machine learning algorithms
- **XGBoost 1.4.2**: Gradient boosting framework
- **Matplotlib/Seaborn**: Data visualization

### Supporting Tools
- **Jupyter Lab**: Interactive development environment
- **Git/GitHub**: Version control and collaboration
- **Docker**: Containerization for reproducible environments
- **AWS**: Cloud computing for large-scale processing

---

*This project demonstrates my comprehensive understanding of the data science lifecycle, from data preprocessing to model deployment. It showcases technical proficiency in machine learning while highlighting the business value of predictive analytics in customer retention strategies.*



